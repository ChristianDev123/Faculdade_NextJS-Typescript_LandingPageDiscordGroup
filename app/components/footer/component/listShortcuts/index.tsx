interface option {
  name: string;
  link?: string;
}

interface ListShortcutsProps {
  title: string;
  options: option[];
}

export default function ListShortcuts({ options, title }: ListShortcutsProps) {
  return (
    <div>
      <h4 className="py-2 text-lg">{title}</h4>
      <ul className="flex flex-col gap-2">
        {options.map(({ name, link }, index) => (
          <li key={index}>{link ? <a href={link}>{name}</a> : name}</li>
        ))}
      </ul>
    </div>
  );
}
