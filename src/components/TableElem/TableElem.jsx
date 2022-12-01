// import css from './TableElem.module.css';


export const TableElem = ({ type, amount, currency }) => {
    return    <tr>
        <td>{ type}</td>
        <td>{amount }</td>
        <td>{ currency}</td>
    </tr>
}