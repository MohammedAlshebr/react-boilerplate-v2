import { useSelector } from "react-redux"
import "./style.scss"

const DashboardPage = () => {

    const users = useSelector(state => state);
    console.log(users)
    return (
        <div className="dashboardpage_containter">
            <p>DashboardPage</p>
        </div>
    )
}

export default DashboardPage
