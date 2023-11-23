import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../store/";

const CarForm = () => {
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => state.form);

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    };
    const handleCostChange = (e) => {
        dispatch(changeCost(parseInt(e.target.value) || 0)); // 如果非數字，則轉0，後續呈現轉 ""
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({ name, cost }));
    };

    return (
        <div>
            <div className="border-2">
                <h4>Add Car</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label>Name</label>
                            <div>{name}</div>
                            <input value={name} onChange={handleNameChange} />
                        </div>
                        <div>
                            <label>Cost</label>
                            <div>{cost}</div>
                            <input
                                value={cost || ""} // 如果是0，則顯示 ""
                                onChange={handleCostChange}
                                type="number"
                            />
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CarForm;