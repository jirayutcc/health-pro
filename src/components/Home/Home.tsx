import "./Home.css";
import healthpro from "../../assets/logo/healthpro.png";

function Main() {
    return (
        <div>
            <img className="logo h-auto max-w-xs mx-auto" src={healthpro}></img>
            <h1 className="text-5xl font-black">Health Pro</h1>
            <p className="text-2xl">
                Health Pro เป็น platform เกี่ยวกับสุขภาพ 💖
            </p>
        </div>
    );
}

export default Main;
