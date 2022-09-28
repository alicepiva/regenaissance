import { GridItem } from '@chakra-ui/react';

type CustomGridItemProps = {
    className: string
    children: any
}

function CustomGridItem({className, children}: CustomGridItemProps) {
    return (
        <GridItem
        textAlign='center'
        bg='brand.900'
        borderRadius='10px'
        w='100%'
        h='10'
        className={className}
        >
            {children}
        </GridItem>
    );
}

export default CustomGridItem;