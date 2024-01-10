import Toggle from './Toggle'

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img className="h-12" src="/dictionary.svg" alt="dictionary icon" />
      <Toggle />
    </div>
  )
}

export default Header
