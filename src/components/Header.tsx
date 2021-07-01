import Slider from 'rc-slider'

const HeaderButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className="mx-3 py-2 px-4 bg-green-500 text-gray-50 rounded-lg hover:bg-green-700	 transition-colors focus:outline-none text-base font-sans tracking-wide font-semibold focus:ring focus:ring-green-400 focus:bg-green-600"
  >
    {label}
  </button>
)

type Props = {
  onSelectionSort: () => void
}

const Header = ({ onSelectionSort }: Props) => {
  return (
    <header className="bg-gray-50 shadow-md py-6">
      <div className="container mx-auto">
        <div className="">
          <div>
            <Slider />
          </div>
          <div>
            <HeaderButton onClick={onSelectionSort} label="Selection Sort" />
            <HeaderButton onClick={onSelectionSort} label="Insertation Sort" />
            <HeaderButton onClick={onSelectionSort} label="Merge Sort" />
            <HeaderButton onClick={onSelectionSort} label="Quick Sort" />
            <HeaderButton onClick={onSelectionSort} label="Heap Sort" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
