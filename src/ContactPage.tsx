import { useState, FormEvent, FormEventHandler } from 'react';

type Contact = { name: string; email: string; reason: string; notes: string };
const FieldStyle = 'flex flex-col mb-2';

export function ContactPage() {
    const [contact, setContact] = useState<Contact>({ name: '', email: '', reason: '', notes: '' });
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Contact:', contact);
    }
    return (
        <div className="flex flex-col py-10 max-w-md mx-auto">
            <h2 className="text-3xl font-bold underline mb-3"> Contact Us</h2>
            <p className="mb-3">
                If you enter your details we'll get back to you as soon as we can.
            </p>
            <form onSubmit={handleSubmit}>
                <div className={FieldStyle}>
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        id="name"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    />
                </div>
                <div className={FieldStyle}>
                    <label htmlFor="email">Your email address</label>
                    <input
                        type="email"
                        id="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    />
                </div>
                <div className={FieldStyle}>
                    <label htmlFor="reason">Reason you need to contact us</label>
                    <select
                        id="reason"
                        onChange={(e) => setContact({ ...contact, reason: e.target.value })}>
                        <option value=""></option>
                        <option value="Support">Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={FieldStyle}>
                    <label htmlFor="notes">Additional notes</label>
                    <textarea
                        id="notes"
                        onChange={(e) => setContact({ ...contact, notes: e.target.value })}
                    />
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
