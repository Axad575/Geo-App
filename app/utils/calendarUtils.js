export const generateCalendarLinks = (meeting) => {
    // Форматирование даты для календарей
    const formatDateForCalendar = (dateString, timeString = '00:00') => {
        try {
            const date = new Date(dateString);
            const [hours, minutes] = timeString.split(':');
            date.setHours(parseInt(hours) || 0, parseInt(minutes) || 0, 0, 0);
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        } catch (error) {
            console.error('Error formatting date:', error);
            const now = new Date();
            return now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        }
    };

    const startDateTime = formatDateForCalendar(meeting.date, meeting.time || '00:00');
    
    // Добавляем 1 час для времени окончания
    const endDate = new Date(meeting.date);
    const [hours, minutes] = (meeting.time || '00:00').split(':');
    endDate.setHours(parseInt(hours) + 1 || 1, parseInt(minutes) || 0, 0, 0);
    const endDateTime = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    // Формируем описание
    let description = meeting.description || 'Team meeting';
    if (meeting.conferenceUrl) {
        description += `\n\nСсылка на конференцию: ${meeting.conferenceUrl}`;
    }

    // Google Calendar
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.append('text', meeting.title);
    googleCalendarUrl.searchParams.append('dates', `${startDateTime}/${endDateTime}`);
    googleCalendarUrl.searchParams.append('details', description);
    googleCalendarUrl.searchParams.append('location', meeting.location || 'Online');

    // Outlook Calendar
    const outlookCalendarUrl = new URL('https://outlook.live.com/calendar/0/deeplink/compose');
    outlookCalendarUrl.searchParams.append('subject', meeting.title);
    outlookCalendarUrl.searchParams.append('body', description);
    outlookCalendarUrl.searchParams.append('startdt', startDateTime);
    outlookCalendarUrl.searchParams.append('enddt', endDateTime);
    outlookCalendarUrl.searchParams.append('location', meeting.location || 'Online');

    return {
        google: googleCalendarUrl.toString(),
        outlook: outlookCalendarUrl.toString()
    };
};

export const downloadICSFile = (meeting) => {
    try {
        const formatDateForICS = (dateString, timeString = '00:00') => {
            const date = new Date(dateString);
            const [hours, minutes] = timeString.split(':');
            date.setHours(parseInt(hours) || 0, parseInt(minutes) || 0, 0, 0);
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        };

        const startDateTime = formatDateForICS(meeting.date, meeting.time || '00:00');
        
        const endDate = new Date(meeting.date);
        const [hours, minutes] = (meeting.time || '00:00').split(':');
        endDate.setHours(parseInt(hours) + 1 || 1, parseInt(minutes) || 0, 0, 0);
        const endDateTime = endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

        let description = meeting.description || 'Team meeting';
        if (meeting.conferenceUrl) {
            description += `\\nСсылка на конференцию: ${meeting.conferenceUrl}`;
        }

        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//GeoNote//Meetings//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${meeting.id}@geonote.app
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDateTime}
DTEND:${endDateTime}
SUMMARY:${meeting.title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${meeting.location || 'Online'}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Напоминание: ${meeting.title}
END:VALARM
END:VEVENT
END:VCALENDAR`;

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `meeting-${meeting.id}.ics`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error creating ICS file:', error);
        throw error;
    }
};