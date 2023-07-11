export default function Appointment(props) {
    return (
        <li className={props.appointment.done ? 'done' : ''}>
            <div>
                <input
                    type="checkbox"
                    id={`appointment-${props.appointment.id}`}
                    onChange={() => props.toogleDone(props.appointment.id)}
                />
                <label htmlFor={`appointment-${props.appointment.id}`}>{props.appointment.name}</label>
            </div>
            <button onClick={() => props.removeAppointment(props.appointment.id)}>Remover</button>
        </li>
    );
}
