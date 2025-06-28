const DepartmentCard = ({ department }) =>{
    return(
        <div className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center bg-white">
            <div className="text-4xl">{department.icon}</div>
            <h3 className="text-lg font-semibold mt-2">{department.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{department.description}</p>
        </div>
    )
}

export default DepartmentCard;
