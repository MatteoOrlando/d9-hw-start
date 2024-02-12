import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaBookmark, } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const FavIndicator = () => {
    const navigate = useNavigate()


    const buttonLabel = useSelector((state) => {

        return state.CompanySearchResult.content.length

    })


    return (
        <div className="d-flex justify-content-end my-4">
            <Button
                onClick={() => navigate('./favJobs')}
                className="d-flex align-items-center"
            >
                <FaBookmark />
                <span className="ms-2 ">{buttonLabel}</span>
            </Button>
        </div>
    )
}

export default FavIndicator