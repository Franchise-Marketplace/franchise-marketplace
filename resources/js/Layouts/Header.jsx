export default function Header() {
    return (
        <>
            <header className="header_container flex items-center justify-around bg-slate-50">
                <img
                    src="images/BF-Magazine-Logo-REV-2.png "
                    alt=""
                    className="h-20"
                />
                <div className="header_buttons flex gap-x-6">
                    <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        News & Advice
                    </button>
                    <button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                        Login
                    </button>
                </div>
            </header>
        </>
    );
}
