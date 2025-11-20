"use client";
import { useState, useRef, useEffect } from 'react';
import { useStrings } from "@/app/hooks/useStrings";

const GeologicalLogTool = ({ onSave, initialData = null }) => {
    const { t } = useStrings();
    const canvasRef = useRef(null);
    const [logData, setLogData] = useState({
        wellName: '',
        location: '',
        elevation: '',
        totalDepth: '',
        scale: 100,
        layers: initialData?.layers || []
    });

    const [currentLayer, setCurrentLayer] = useState({
        depthFrom: '',
        depthTo: '',
        lithology: 'sandstone',
        color: '#F4D03F',
        description: '',
        grain_size: 'medium',
        fossils: '',
        remarks: ''
    });

    const [showGrid, setShowGrid] = useState(true);
    const [selectedLayer, setSelectedLayer] = useState(null);

    // Типы литологии с цветами и паттернами
    const lithologyTypes = {
        sandstone: { name: t('geologicalLog.sandstone'), color: '#F4D03F', pattern: 'dots' },
        limestone: { name: t('geologicalLog.limestone'), color: '#85C1E2', pattern: 'brick' },
        shale: { name: t('geologicalLog.shale'), color: '#95A5A6', pattern: 'horizontal' },
        clay: { name: t('geologicalLog.clay'), color: '#D4AC6E', pattern: 'solid' },
        coal: { name: t('geologicalLog.coal'), color: '#34495E', pattern: 'solid' },
        granite: { name: t('geologicalLog.granite'), color: '#E8A798', pattern: 'crosses' },
        conglomerate: { name: t('geologicalLog.conglomerate'), color: '#BDC3C7', pattern: 'circles' },
        marl: { name: t('geologicalLog.marl'), color: '#AED6F1', pattern: 'wavy' },
        dolomite: { name: t('geologicalLog.dolomite'), color: '#F8B88B', pattern: 'brick' },
        gypsum: { name: t('geologicalLog.gypsum'), color: '#FAD7A0', pattern: 'diagonal' }
    };

    const grainSizes = {
        'very_fine': t('geologicalLog.veryFine'),
        'fine': t('geologicalLog.fine'),
        'medium': t('geologicalLog.medium'),
        'coarse': t('geologicalLog.coarse'),
        'very_coarse': t('geologicalLog.veryCoarse')
    };

    // Добавление слоя
    const handleAddLayer = () => {
        if (!currentLayer.depthFrom || !currentLayer.depthTo) {
            alert(t('geologicalLog.enterDepth'));
            return;
        }

        const from = parseFloat(currentLayer.depthFrom);
        const to = parseFloat(currentLayer.depthTo);

        if (from >= to) {
            alert(t('geologicalLog.depthError'));
            return;
        }

        const newLayer = {
            id: Date.now().toString(),
            ...currentLayer,
            depthFrom: from,
            depthTo: to,
            color: lithologyTypes[currentLayer.lithology].color
        };

        setLogData(prev => ({
            ...prev,
            layers: [...prev.layers, newLayer].sort((a, b) => a.depthFrom - b.depthFrom)
        }));

        setCurrentLayer({
            depthFrom: to.toString(),
            depthTo: '',
            lithology: 'sandstone',
            color: '#F4D03F',
            description: '',
            grain_size: 'medium',
            fossils: '',
            remarks: ''
        });
    };

    // Удаление слоя
    const handleDeleteLayer = (layerId) => {
        if (window.confirm(t('geologicalLog.deleteLayer'))) {
            setLogData(prev => ({
                ...prev,
                layers: prev.layers.filter(l => l.id !== layerId)
            }));
            if (selectedLayer === layerId) {
                setSelectedLayer(null);
            }
        }
    };

    // Рисование на canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        const leftMargin = 60;
        const rightMargin = 50;
        const topMargin = 80;
        const logWidth = width - leftMargin - rightMargin;
        const scale = logData.scale;

        // Заголовок
        ctx.fillStyle = '#000';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(logData.wellName || t('geologicalLog.title'), leftMargin, 20);
        
        ctx.font = '11px Arial';
        let headerY = 35;
        if (logData.location) {
            ctx.fillText(`${t('geologicalLog.location')}: ${logData.location}`, leftMargin, headerY);
            headerY += 14;
        }
        if (logData.elevation) {
            ctx.fillText(`${t('geologicalLog.elevation')}: ${logData.elevation} м`, leftMargin, headerY);
            headerY += 14;
        }
        if (logData.totalDepth) {
            ctx.fillText(`${t('geologicalLog.totalDepth')}: ${logData.totalDepth} м`, leftMargin, headerY);
        }

        // Сетка и глубины
        if (showGrid) {
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 1;

            const maxDepth = parseFloat(logData.totalDepth) || 
                            Math.max(...logData.layers.map(l => l.depthTo), 100);

            for (let depth = 0; depth <= maxDepth; depth += 10) {
                const y = topMargin + (depth * scale / 10);
                
                ctx.beginPath();
                ctx.moveTo(leftMargin, y);
                ctx.lineTo(width - rightMargin, y);
                ctx.stroke();

                ctx.fillStyle = '#000';
                ctx.font = '10px Arial';
                ctx.textAlign = 'right';
                ctx.fillText(`${depth}m`, leftMargin - 5, y + 4);
            }
        }
        
        if (!showGrid && logData.layers.length > 0) {
            ctx.fillStyle = '#000';
            ctx.font = '10px Arial';
            ctx.textAlign = 'right';
            
            const uniqueDepths = new Set();
            logData.layers.forEach(layer => {
                uniqueDepths.add(layer.depthFrom);
                uniqueDepths.add(layer.depthTo);
            });
            
            Array.from(uniqueDepths).sort((a, b) => a - b).forEach(depth => {
                const y = topMargin + (depth * scale / 10);
                ctx.fillText(`${depth}m`, leftMargin - 5, y + 4);
            });
        }

        // Рисование слоев
        logData.layers.forEach(layer => {
            const yStart = topMargin + (layer.depthFrom * scale / 10);
            const yEnd = topMargin + (layer.depthTo * scale / 10);
            const layerHeight = yEnd - yStart;

            ctx.fillStyle = layer.color;
            ctx.fillRect(leftMargin, yStart, logWidth, layerHeight);

            drawPattern(ctx, leftMargin, yStart, logWidth, layerHeight, 
                       lithologyTypes[layer.lithology].pattern, layer.color);

            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.strokeRect(leftMargin, yStart, logWidth, layerHeight);

            if (selectedLayer === layer.id) {
                ctx.strokeStyle = '#e74c3c';
                ctx.lineWidth = 3;
                ctx.strokeRect(leftMargin, yStart, logWidth, layerHeight);
            }

            if (layerHeight > 20) {
                ctx.fillStyle = '#000';
                ctx.font = 'bold 11px Arial';
                ctx.textAlign = 'center';
                const text = lithologyTypes[layer.lithology].name;
                ctx.fillText(text, leftMargin + logWidth / 2, yStart + layerHeight / 2 - 5);
                
                if (layer.grain_size) {
                    ctx.font = '9px Arial';
                    ctx.fillText(`(${grainSizes[layer.grain_size]})`, leftMargin + logWidth / 2, yStart + layerHeight / 2 + 8);
                }
            }

            if (layer.description) {
                ctx.fillStyle = '#000';
                ctx.font = '10px Arial';
                ctx.textAlign = 'left';
                const maxWidth = rightMargin - 10;
                const words = layer.description.split(' ');
                let line = '';
                let lineY = yStart + 12;

                words.forEach(word => {
                    const testLine = line + word + ' ';
                    const metrics = ctx.measureText(testLine);
                    if (metrics.width > maxWidth && line !== '') {
                        ctx.fillText(line, width - rightMargin + 5, lineY);
                        line = word + ' ';
                        lineY += 12;
                    } else {
                        line = testLine;
                    }
                });
                ctx.fillText(line, width - rightMargin + 5, lineY);
            }
        });

        drawLegend(ctx, width, height);

    }, [logData, showGrid, selectedLayer, t]);

    const drawPattern = (ctx, x, y, width, height, pattern, baseColor) => {
        ctx.save();
        ctx.strokeStyle = adjustColor(baseColor, -40);
        ctx.lineWidth = 1;

        switch (pattern) {
            case 'dots':
                for (let i = 0; i < width; i += 10) {
                    for (let j = 0; j < height; j += 10) {
                        ctx.fillStyle = adjustColor(baseColor, -40);
                        ctx.beginPath();
                        ctx.arc(x + i + 5, y + j + 5, 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                break;
            case 'horizontal':
                for (let j = 0; j < height; j += 5) {
                    ctx.beginPath();
                    ctx.moveTo(x, y + j);
                    ctx.lineTo(x + width, y + j);
                    ctx.stroke();
                }
                break;
            case 'brick':
                for (let j = 0; j < height; j += 10) {
                    const offset = (j / 10) % 2 === 0 ? 0 : 15;
                    for (let i = offset; i < width; i += 30) {
                        ctx.strokeRect(x + i, y + j, 25, 8);
                    }
                }
                break;
            case 'crosses':
                for (let i = 0; i < width; i += 15) {
                    for (let j = 0; j < height; j += 15) {
                        ctx.beginPath();
                        ctx.moveTo(x + i, y + j - 5);
                        ctx.lineTo(x + i, y + j + 5);
                        ctx.moveTo(x + i - 5, y + j);
                        ctx.lineTo(x + i + 5, y + j);
                        ctx.stroke();
                    }
                }
                break;
            case 'circles':
                for (let i = 0; i < width; i += 15) {
                    for (let j = 0; j < height; j += 15) {
                        ctx.beginPath();
                        ctx.arc(x + i, y + j, 4, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }
                break;
            case 'diagonal':
                for (let i = -height; i < width; i += 10) {
                    ctx.beginPath();
                    ctx.moveTo(x + i, y + height);
                    ctx.lineTo(x + i + height, y);
                    ctx.stroke();
                }
                break;
            case 'wavy':
                for (let j = 0; j < height; j += 8) {
                    ctx.beginPath();
                    ctx.moveTo(x, y + j);
                    for (let i = 0; i < width; i += 5) {
                        ctx.lineTo(x + i, y + j + Math.sin(i / 5) * 2);
                    }
                    ctx.stroke();
                }
                break;
        }
        ctx.restore();
    };

    const adjustColor = (color, amount) => {
        const num = parseInt(color.replace('#', ''), 16);
        const r = Math.max(0, Math.min(255, (num >> 16) + amount));
        const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
        const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    };

    const drawLegend = (ctx, width, height) => {
        const usedLithologies = [...new Set(logData.layers.map(layer => layer.lithology))];
        
        if (usedLithologies.length === 0) return;
        
        const legendX = 10;
        const legendHeight = 30 + (usedLithologies.length * 20) + 10;
        const legendY = height - legendHeight - 10;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(legendX, legendY, 200, legendHeight);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(legendX, legendY, 200, legendHeight);

        ctx.fillStyle = '#000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(t('geologicalLog.legend') + ':', legendX + 10, legendY + 20);

        ctx.font = '10px Arial';
        let yOffset = 35;
        usedLithologies.forEach(lithologyKey => {
            const lithology = lithologyTypes[lithologyKey];
            
            ctx.fillStyle = lithology.color;
            ctx.fillRect(legendX + 10, legendY + yOffset, 20, 15);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 1;
            ctx.strokeRect(legendX + 10, legendY + yOffset, 20, 15);
            
            ctx.fillStyle = '#000';
            ctx.fillText(lithology.name, legendX + 35, legendY + yOffset + 11);
            yOffset += 20;
        });
    };

    const handleExport = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.download = `geological_log_${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    };

    const handleSave = () => {
        if (onSave) {
            onSave({
                ...logData,
                canvas: canvasRef.current.toDataURL()
            });
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{t('geologicalLog.title')}</h2>
                <div className="flex gap-2">
                    <button
                        onClick={handleExport}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                        📥 {t('geologicalLog.exportPNG')}
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                        💾 {t('geologicalLog.save')}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Левая панель - Настройки */}
                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-3">{t('geologicalLog.generalData')}</h3>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium mb-1">{t('geologicalLog.wellName')}</label>
                                <input
                                    type="text"
                                    value={logData.wellName}
                                    onChange={(e) => setLogData(prev => ({ ...prev, wellName: e.target.value }))}
                                    className="w-full px-3 py-2 border rounded-lg text-sm"
                                    placeholder={t('geologicalLog.wellNamePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">{t('geologicalLog.location')}</label>
                                <input
                                    type="text"
                                    value={logData.location}
                                    onChange={(e) => setLogData(prev => ({ ...prev, location: e.target.value }))}
                                    className="w-full px-3 py-2 border rounded-lg text-sm"
                                    placeholder={t('geologicalLog.locationPlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">{t('geologicalLog.elevation')}</label>
                                <input
                                    type="number"
                                    value={logData.elevation}
                                    onChange={(e) => setLogData(prev => ({ ...prev, elevation: e.target.value }))}
                                    className="w-full px-3 py-2 border rounded-lg text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">{t('geologicalLog.totalDepth')}</label>
                                <input
                                    type="number"
                                    value={logData.totalDepth}
                                    onChange={(e) => setLogData(prev => ({ ...prev, totalDepth: e.target.value }))}
                                    className="w-full px-3 py-2 border rounded-lg text-sm"
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={showGrid}
                                    onChange={(e) => setShowGrid(e.target.checked)}
                                    className="mr-2"
                                />
                                <label className="text-sm">{t('geologicalLog.showGrid')}</label>
                            </div>
                        </div>
                    </div>

                    {/* Добавление слоя */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-3">{t('geologicalLog.addLayer')}</h3>
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="block text-xs font-medium mb-1">{t('geologicalLog.depthFrom')}</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={currentLayer.depthFrom}
                                        onChange={(e) => setCurrentLayer(prev => ({ ...prev, depthFrom: e.target.value }))}
                                        className="w-full px-2 py-1 border rounded text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium mb-1">{t('geologicalLog.depthTo')}</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={currentLayer.depthTo}
                                        onChange={(e) => setCurrentLayer(prev => ({ ...prev, depthTo: e.target.value }))}
                                        className="w-full px-2 py-1 border rounded text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">{t('geologicalLog.lithology')}</label>
                                <select
                                    value={currentLayer.lithology}
                                    onChange={(e) => setCurrentLayer(prev => ({ 
                                        ...prev, 
                                        lithology: e.target.value,
                                        color: lithologyTypes[e.target.value].color
                                    }))}
                                    className="w-full px-2 py-1 border rounded text-sm"
                                >
                                    {Object.entries(lithologyTypes).map(([key, value]) => (
                                        <option key={key} value={key}>{value.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">{t('geologicalLog.grainSize')}</label>
                                <select
                                    value={currentLayer.grain_size}
                                    onChange={(e) => setCurrentLayer(prev => ({ ...prev, grain_size: e.target.value }))}
                                    className="w-full px-2 py-1 border rounded text-sm"
                                >
                                    {Object.entries(grainSizes).map(([key, value]) => (
                                        <option key={key} value={key}>{value}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">{t('geologicalLog.description')}</label>
                                <textarea
                                    value={currentLayer.description}
                                    onChange={(e) => setCurrentLayer(prev => ({ ...prev, description: e.target.value }))}
                                    className="w-full px-2 py-1 border rounded text-sm"
                                    rows="2"
                                    placeholder={t('geologicalLog.descriptionPlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium mb-1">{t('geologicalLog.fossils')}</label>
                                <input
                                    type="text"
                                    value={currentLayer.fossils}
                                    onChange={(e) => setCurrentLayer(prev => ({ ...prev, fossils: e.target.value }))}
                                    className="w-full px-2 py-1 border rounded text-sm"
                                    placeholder={t('geologicalLog.fossilsPlaceholder')}
                                />
                            </div>
                            <button
                                onClick={handleAddLayer}
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                            >
                                + {t('geologicalLog.addLayerButton')}
                            </button>
                        </div>
                    </div>

                    {/* Список слоев */}
                    <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                        <h3 className="font-semibold mb-3">{t('geologicalLog.layers')} ({logData.layers.length})</h3>
                        {logData.layers.length === 0 ? (
                            <p className="text-sm text-gray-500">{t('geologicalLog.noLayers')}</p>
                        ) : (
                            <div className="space-y-2">
                                {logData.layers.map(layer => (
                                    <div
                                        key={layer.id}
                                        onClick={() => setSelectedLayer(layer.id)}
                                        className={`p-2 rounded cursor-pointer ${
                                            selectedLayer === layer.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white'
                                        }`}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div
                                                        className="w-4 h-4 rounded border"
                                                        style={{ backgroundColor: layer.color }}
                                                    />
                                                    <span className="text-xs font-medium">
                                                        {lithologyTypes[layer.lithology].name}
                                                    </span>
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    {layer.depthFrom}m - {layer.depthTo}m
                                                </div>
                                                {layer.description && (
                                                    <div className="text-xs text-gray-500 mt-1 truncate">
                                                        {layer.description}
                                                    </div>
                                                )}
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteLayer(layer.id);
                                                }}
                                                className="text-red-500 hover:text-red-700 p-1"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Canvas для отображения лога */}
                <div className="lg:col-span-2">
                    <div className="bg-gray-100 rounded-lg p-4 overflow-auto">
                        <canvas
                            ref={canvasRef}
                            width={600}
                            height={800}
                            className="border border-gray-300 bg-white mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Уведомление о необходимости сохранения */}
            <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
                <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                        <p className="font-semibold text-yellow-900 mb-1">⚠️ {t('geologicalLog.warningTitle')}</p>
                        <p className="text-sm text-yellow-800">
                            {t('geologicalLog.warningText')} <strong>"💾 {t('geologicalLog.warningButton')}"</strong>. 
                            {' '}{t('geologicalLog.warningFooter')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeologicalLogTool;
