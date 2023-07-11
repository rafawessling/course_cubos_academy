import { useState } from 'react';
import Appointment from './components/Appointment';

function App() {
    const [appointments, setAppointments] = useState([]);

    const addAppointment = () => {
        const name = prompt('Provide the name of the appointment: ');
        const newAppointment = {
            id: Math.floor(100000 * (Math.random() + 1)),
            name,
            done: false,
        };
        setAppointments(currentState => [...currentState, newAppointment]);
    };

    const toggleDone = appointmentId => {
        setAppointments(currentState =>
            currentState.map(appointment => {
                if (appointment.id !== appointmentId) return appointment;
                else return { ...appointment, done: !appointment.done };
            })
        );
    };

    const removeAppointment = appointmentId => {
        setAppointments(currentState => currentState.filter(appointment => appointment.id !== appointmentId));
    };

    return (
        <main>
            <h1>Mini planner</h1>
            <div className="day">
                <h2>Monday</h2>
                <ul>
                    {appointments.map(appointment => (
                        <Appointment
                            key="appointment.id"
                            appointment={appointment}
                            toggleDone={toggleDone}
                            removeAppointment={removeAppointment}
                        />
                    ))}
                </ul>

                <button onClick={addAppointment}>Adicionar</button>
            </div>
        </main>
    );
}

export default App;
