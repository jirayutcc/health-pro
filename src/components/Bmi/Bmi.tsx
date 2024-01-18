import { useState } from "react";
import { Input } from "@material-tailwind/react";
import BmiCalculator from "./BmiCalculator";
import "./Bmi.css";

function Bmi() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (name === "weight") {
            setWeight(Number(value));
        } else if (name === "height") {
            setHeight(Number(value));
        }
    };

    const calculateBmi = () => {
        // const bmi = weight / ((height / 100) * (height / 100))
        const bmi = weight / (height / 100) ** 2;
        setBmi(bmi);
    };

    return (
        <div className="body-div">
            <h1 className="text-5xl">BMI Calculator</h1>
            <p className="subtitle">โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

            <label htmlFor="weight">น้ำหนัก (kg)</label>
            <input type="number" name="weight" onChange={handleOnChange} />

            <div className="w-72">
                <Input
                    type="email"
                    color="white"
                    label="Email Address"
                    crossOrigin={undefined}
                />
            </div>

            <label htmlFor="height">ส่วนสูง (cm)</label>
            <input type="number" name="height" onChange={handleOnChange} />

            <button type="button" onClick={calculateBmi}>
                คำนวณ
            </button>

            <hr />

            <BmiCalculator bmi={bmi} />
        </div>
    );
}

export default Bmi;
