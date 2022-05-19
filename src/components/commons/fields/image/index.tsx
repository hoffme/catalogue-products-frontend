import {useCallback, useEffect, useState} from "react";

import UploadSrc from '../../../../assets/icons/upload.svg';

import ImagesService, {Image} from "../../../../services/images";

import {PrimaryButton, SecondaryButton} from "../../buttons/main";

import Loading from "../../loading";

import style from './style.module.scss';

interface Props {
    value: string
    onChange: (value: string) => void
}

const InputImage = (props: Props) => {
    const [loading, setLoading] = useState(false);

    const loaded = props.value.length > 0;

    const handlerUpload = () => {
        let uri: string = '';

        if (!loaded) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = () => {
                const file = input.files?.[0];
                if (!file) return;

                setLoading(true);
                ImagesService.Upload(file)
                    .then(img => props.onChange(img.uri))
                    .catch(console.error)
                    .finally(() => setLoading(false))
            }

            input.click();
        }

        props.onChange(uri);
    }

    return <div className={style.container}>
        <img src={loaded ? `http://localhost:4000${props.value}` : UploadSrc} alt={''} />
        <PrimaryButton onClick={handlerUpload} className={style.button}>
            { loading ? <Loading light /> : loaded ? 'Eliminar' : 'Subir' }
        </PrimaryButton>
    </div>
}

export default InputImage;
