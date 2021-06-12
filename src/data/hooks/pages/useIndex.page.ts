import { useState } from 'react';

export default function useIndex() {
    const [cep, setCep] = useState('');

    return {
        cep,
        setCep,
    };
}