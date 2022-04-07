import React, { useEffect, useState } from 'react'

//vamos a recibir 2 valores input y time
export const useDebouncedValue = (input: string = '', time: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(input);

    //e useEffect se va a disparar cuando el input cambie (osea cuando escriban)
    useEffect(() => {
        //2. se crea una instancia de acuerdo a lo escrito
        const timeout = setTimeout(() => {
            setDebouncedValue(input);
        }, time);

        //3. Hará una limpieza de la instancia anterior, cada vez que se ingrese un nuevo valor (lo escrito)
        return () => {
            clearTimeout(timeout)
        }

    }, [input]) //1. cada vez que el useEffect se dispare (osea se escriba algo)

    return debouncedValue;

}
