import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        {showAdd ?
          <Button color='red' text='Close' btnEvent={onAdd}/> :
          <Button color='green' text='Add' btnEvent={onAdd}/>
        }
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default Header