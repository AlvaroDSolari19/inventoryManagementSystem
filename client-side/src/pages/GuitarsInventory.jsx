import { useSearchParams } from 'react-router-dom';
import { GuitarList } from '../components/List/GuitarList'

export const GuitarsInventory = () => {
    
    const [searchParams] = useSearchParams(); 
    const maxCapacity = searchParams.get('capacity');

    return (
        <div>
            <GuitarList maxCapacity={maxCapacity} />
        </div>
    )
}