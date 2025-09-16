import { useContextApi } from '../hooks/useContextApi'
import B from './B'

function A() {

    const {count} =  useContextApi()


    return (
        <div>
            A
            <hr />
            <B />
        </div>
    )
}

export default A