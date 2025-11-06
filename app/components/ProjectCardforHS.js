"use client";
import { useRouter } from 'next/navigation';
import { useStrings } from "@/app/hooks/useStrings";

const ProjectCard = ({ project }) => {
    const { t } = useStrings();
    const router = useRouter();
    
    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'border-black dark:border-white';
            case 'completed':
                return 'border-green-400 dark:border-green-500';
            case 'upcoming':
                return 'border-yellow-400 dark:border-yellow-500';
            default:
                return 'border-gray-300 dark:border-gray-600';
        }
    };

    const formatDate = (date) => {
        if (!date) return '';
        try {
            return new Date(date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        } catch (error) {
            return date; // Return original string if parsing fails
        }
    };

    return (
        <div 
            onClick={() => router.push(`/pages/projects/${project.id}`)}
            className={`p-6 rounded-lg border-2 ${getStatusColor(project.status)} bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer hover:border-blue-400 dark:hover:border-blue-500`}
        >
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h3>
                {project.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{formatDate(project.startDate)}</span>
                    <span>-</span>
                    <span>{formatDate(project.endDate)}</span>
                </div>
                {project.ownerName && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{t('projects.owner')}:</span> {project.ownerName}
                    </div>
                )}
                {project.participantsNames && project.participantsNames.length > 0 && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{t('projects.team')}:</span> {project.participantsNames.join(', ')}
                    </div>
                )}
                <div className="mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium
                        ${project.status?.toLowerCase() === 'active' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                        project.status?.toLowerCase() === 'completed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'}`}>
                        {project.status || t('meetings.noStatus')}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;