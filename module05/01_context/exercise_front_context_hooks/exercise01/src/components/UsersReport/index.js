import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser.js';
import './styles.css';

const defaultReportsState = { usersCount: 0, ageMedia: 0 };

function UsersReport() {
    const [reports, setReports] = useState(defaultReportsState);
    const { usersData } = useUser();

    useEffect(() => {
        if (usersData.length) {
            const ages =
                usersData.length &&
                usersData.reduce((acum, user) => {
                    return acum + user.age;
                }, 0);

            const localReports = { ...reports };

            localReports.usersCount = usersData.length;
            localReports.ageMedia = ages / usersData.length;

            setReports(localReports);
            return;
        }

        setReports(defaultReportsState);
    }, [usersData]);

    return (
        <div className="container-report">
            <div className="report-item">
                <span>Total de usuários:</span>
                <strong>{reports.usersCount}</strong>
            </div>
            <div className="report-item">
                <span>Média de idade:</span>
                <strong>{reports.ageMedia}</strong>
            </div>
        </div>
    );
}

export default UsersReport;
