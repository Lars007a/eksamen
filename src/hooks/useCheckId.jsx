export default function useCheckId() {
    const validate = (id) => { //Laver et validate funktion, der taget et id, og tjekker det op med et regex express, der retunere true eller false, baseret på om den passer. Fandt regex expressionen på internettet, og den burde passe med mongodb object id.
        return /^[0-9a-fA-F]{24}$/.test(id); 
    }

    return validate; //retunere funktionen
}