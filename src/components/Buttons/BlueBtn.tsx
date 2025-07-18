
interface props { 
    label: string,
    click?: (e?: Event)=>void,
};

export default function BlueBtn({label=''}:props){
    return (
        <button className="bg-[var(--light-blue)] text-[var(--white)] px-4 py-[0.4em] rounded-[3px] font-medium text-[0.95em] mx-[0.2em]" >
            { label }
        </button>
    );
}