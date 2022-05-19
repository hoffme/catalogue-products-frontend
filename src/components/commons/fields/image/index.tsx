import UploadSrc from '../../../../assets/icons/upload.svg';

import ImagesService from "../../../../services/images";

import {PrimaryButton} from "../../buttons/main";

import style from './style.module.scss';

interface Props {
    value: string
    onChange: (value: string) => void
}

const InputImage = (props: Props) => {
    const loaded = props.value.length > 0;

    const handlerUpload = async () => {
        if (loaded) {
            props.onChange('');
            return;
        }

        const file = await new Promise<File | undefined>((res) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = () => res(input.files?.[0]);
            input.click();
        })
        if (!file) return;

        const image = await ImagesService.Upload(file);

        props.onChange(image.uri);
    }

    return <div className={style.container}>
        <img src={loaded ? props.value : UploadSrc} alt={''} />
        <PrimaryButton onClickAsync={handlerUpload} className={style.button}>
            { loaded ? 'Eliminar' : 'Subir' }
        </PrimaryButton>
    </div>
}

export default InputImage;
