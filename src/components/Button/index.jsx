
export function Button({title, cor, ...rest}){
    return(
        <button {...rest} className={`py-1 px-4 rounded-lg hover:brightness-75 text-white font-medium text-lg cursor-pointer ${cor}`}>{title}</button>
    )
}