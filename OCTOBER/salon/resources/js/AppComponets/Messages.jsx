import { useContext } from 'react';
import { SalonContext } from '@/Salons/SalonProvider';

export default function Messages()  {

    const { messages, removeMessage } = useContext(SalonContext);

    if (0 === messages.length) {
        return null;
    }

    return (
        <div className="messages-bin">
            {messages.map(message => (
                <div onClick={_ => removeMessage(message.id) } key={message.id} className={'alert alert-' + message.type} role="alert">
                    {message.text}
              </div>
            ))}
        </div>
    );
};

