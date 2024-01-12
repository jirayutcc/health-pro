import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="pt-7"></div>
            <div className="pt-5 pb-5 border-t border-slate-200/5 sm:flex justify-center text-slate-500">
                <div className="mb-6 sm:mb-0 sm:flex">
                    <p>Copyright © {new Date().getFullYear()} Jirayutcc</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
