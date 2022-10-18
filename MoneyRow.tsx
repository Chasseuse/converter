
type Props = {
    rates: string[],
    selectedMoney: string | undefined,
    onChangeMoney: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    number: number,
    onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function MoneyRow(props: Props) {
    var rates = props.rates, selectedMoney = props.selectedMoney, onChangeMoney = props.onChangeMoney, number = props.number, onChangeNumber = props.onChangeNumber;
    return (
    <div className='moneyRow'>
        <input type="number" className='input' value={number} onChange={onChangeNumber} />
        <select value={selectedMoney} onChange={onChangeMoney} className='select'>
            {
                rates.map((rate: string) => (
                    <option className='option' key={rate} value={rate}>{rate}</option>
                ))
            }
        </select>
    </div>
    )
}

export default MoneyRow