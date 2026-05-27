import Image from "next/image";

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-box">
      <div className="search-icon-wrapper">
        <Image src="/icons/search.svg" alt="Search" className="search-icon" width={24} height={24} />
      </div>
      <input
        type="text"
        placeholder="어트랙션 이름을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      {value && (
        <button onClick={() => onChange('')} className="search-clear-button">
          <Image src="/icons/close.svg" alt="Clear" className="clear-icon" width={24} height={24} />
        </button>
      )}
    </div>
  );
}