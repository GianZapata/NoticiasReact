import React from 'react';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Saluda' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnologia' },
    ];

    // Utilizar custom hook
    const [categoria,SelectNoticias] = useSelect('general',OPCIONES);

    // Submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    };

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}    
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <div className="input-field col s12">
                        <SelectNoticias/>
                        <button
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}                            
                        >Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
export default Formulario;;