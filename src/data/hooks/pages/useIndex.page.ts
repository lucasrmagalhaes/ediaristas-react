import { useState } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';

export default function useIndex() {
    const 
        [cep, setCep] = useState(''),
        [erro, setErro] = useState(''),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);

    return {
        cep,
        setCep,
    };
}