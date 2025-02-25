"use client";


export default function Content(userName: string, userEmail: string) {
    let control = undefined;

    return (
        <div className="w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base">
            <span className="font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center">
                Login
            </span>
            <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    className="form-input"
                    required
                    value={userName}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="mail"
                    placeholder="name@provider.com"
                    className="form-input"
                    required
                    value={userEmail}
                />
            </div>
            <input type="hidden" id="timestamp" name="timestamp" value={control} />
        </div>
    );
}