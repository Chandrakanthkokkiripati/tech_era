import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {course} = props
  const {logoUrl, name, id} = course

  return (
    <Link className="link-item" to={`/courses/${id}`}>
      <li className="course-item">
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
