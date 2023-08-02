import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
type Contact = { name: string; email: string; reason: string; notes: string };
const FieldStyle = 'flex flex-col mb-2';

export function ContactPage() {
    const { register, handleSubmit } = useForm<Contact>();
    const navigate = useNavigate();
    function onSubmit(contact: Contact) {
        console.log('Submit detail: ', contact);
        navigate(`/thank-you/${contact.name}`);
    }
    return (
        <div className="flex flex-col py-10 max-w-md mx-auto">
            <h2 className="text-3xl font-bold underline mb-3"> Contact Us</h2>
            <p className="mb-3">
                If you enter your details we'll get back to you as soon as we can.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={FieldStyle}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required {...register('name')} />
                </div>
                <div className={FieldStyle}>
                    <label htmlFor="email">Your email address</label>
                    <input
                        type="email"
                        id="email"
                        required
                        pattern="\S+@\S+\.\S+"
                        {...register('name')}
                    />
                </div>
                <div className={FieldStyle}>
                    <label htmlFor="reason">Reason you need to contact us</label>
                    <select id="reason" required {...register('reason')}>
                        <option value=""></option>
                        <option value="Support">Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={FieldStyle}>
                    <label htmlFor="notes">Additional notes</label>
                    <textarea id="notes" required {...register('notes')} />
                </div>
                <div>
                    <button
                        type="submit"
                        className="mt-2 h-10 px-6 font-semibold bg-black text-white">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
