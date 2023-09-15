import Image from 'next/image';
import classNames from 'classnames';
import { BLUR_DATA_URL } from '../../../../constants/blur-data-url';
import styles from './cases-image-block.module.scss';

type CasesImageBlockProps = {
    image: string;
    alt: string;
    keyForStyle: string;
};

export const CasesImageBlock = ({ image, alt, keyForStyle }: CasesImageBlockProps) => {
    const containerStyles = classNames([
        styles.imageContainer,
        styles[`imageContainer${keyForStyle}`]
    ]
    );
    const wrapperStyles = classNames({
        [styles.casesImageWrapper]: true,
        [styles.casesImageWrapperEnd]: keyForStyle === '2'
    });

    return (
        <div className={wrapperStyles}>
            <div className={containerStyles}>
                <Image
                    src={image}
                    alt={alt}
                    fill
                    quality={100}
                    className={styles.imageContent}
                    priority
                    blurDataURL={BLUR_DATA_URL}
                    placeholder='blur'
                />
            </div>
        </div>
    );
};

