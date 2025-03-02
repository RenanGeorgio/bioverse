interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="p-1">
        {checked ? 'Admin ' : 'User '}
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-12 h-6 flex items-center rounded-full transition duration-300 focus:outline-none ${
          checked ? 'bg-green-500' : 'bg-gray-400'
        }`}
        aria-pressed={checked}
      >
        <span
          className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition ${
            checked ? 'translate-x-6' : ''
          }`}
        ></span>
      </button>
    </div>
  );
}

export default ToggleSwitch;