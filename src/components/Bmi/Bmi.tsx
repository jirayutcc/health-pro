import { useState, useRef } from "react";
import { Button, TextInput } from "flowbite-react";
import BmiCalculator from "./BmiCalculator";
import ValidateInput from "../Validator/ValidateInput";
import AlertComponents from "../Alert/AlertComponents";
import "./Bmi.css";

function Bmi() {
    const min = 0;
    const weightMax = 500;
    const heightMax = 5000;

    const weightRef = useRef<HTMLInputElement>(null);
    const heightRef = useRef<HTMLInputElement>(null);

    const [bmi, setBmi] = useState(0);
    const [isAlertVisible, setAlertVisibility] = useState(false);

    const calculateBmi = () => {
        const weightValue = weightRef.current?.value;
        const heightValue = heightRef.current?.value;

        if (ValidateInput(weightValue) && ValidateInput(heightValue)) {
            const weight = Number(weightValue);
            const height = Number(heightValue);
            const bmi = weight / (height / 100) ** 2;
            setBmi(bmi);
        } else {
            setAlertVisibility(true);
        }
    };

    const closeAlert = () => {
        setAlertVisibility(false);
    };

    const resetData = () => {
        if (weightRef.current && heightRef.current) {
            weightRef.current.value = "";
            heightRef.current.value = "";
        }
        setBmi(0);
    };

    const handleChangeWeight = () => {
        if (weightRef.current) {
            const value = Math.max(
                min,
                Math.min(weightMax, Number(weightRef.current.value))
            );
            weightRef.current.value = value.toString();
        }
    };

    const handleChangeHeight = () => {
        if (heightRef.current) {
            const value = Math.max(
                min,
                Math.min(heightMax, Number(heightRef.current.value))
            );
            heightRef.current.value = value.toString();
        }
    };

    return (
        <div className="body-div">
            <h1 className="text-5xl">BMI Calculator</h1>
            <p className="subtitle">โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>
            <br />

            <label htmlFor="weight">น้ำหนัก (kg)</label>
            <div className="flex justify-center">
                <TextInput
                    className="w-52"
                    type="number"
                    name="weight"
                    ref={weightRef}
                    onChange={handleChangeWeight}
                    required
                />
            </div>
            <br />

            <label htmlFor="height">ส่วนสูง (cm)</label>
            <div className="flex justify-center">
                <TextInput
                    className="w-52"
                    type="number"
                    name="height"
                    ref={heightRef}
                    onChange={handleChangeHeight}
                    required
                />
            </div>

            <div className="flex justify-center">
                <Button
                    className="mt-4 w-52"
                    gradientDuoTone="purpleToBlue"
                    type="button"
                    onClick={calculateBmi}
                >
                    คำนวณ
                </Button>
            </div>
            <br />

            <button
                type="button"
                className="text-white hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mb-5"
                onClick={resetData}
            >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.7 7.7A7.1 7.1 0 0 0 5 10.8M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2M6 20v-4h4"
                    />
                </svg>
                <span className="sr-only">Reset</span>
            </button>
            <hr className="w-5 border-gray-400 m-auto mb-5" />
            <BmiCalculator bmi={bmi} />

            <AlertComponents
                isVisible={isAlertVisible}
                onClose={closeAlert}
                color="yellow"
                message="กรุณากรอก น้ำหนัก และ ส่วนสูง"
            />
        </div>
    );
}

export default Bmi;
