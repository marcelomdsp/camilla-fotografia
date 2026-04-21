'use client'
export default function InputTelefone({ value, name, onChange }: { value: string; name: string; onChange: (value: string) => void }) {
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value.replace(/\D/g, ""); // remove tudo que não é número

    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    onChange(valor);
  };

  return (
    <div className="flex flex-col w-full">
      <input
        type="tel"
        id="telefone"
        name={name}
        value={value}
        onChange={handleTelefoneChange}
        placeholder="(99) 99999-9999"
        className="w-full p-3 bg-(--branco) rounded-lg focus:outline-none focus:ring-1 focus:ring-(--vinho)"
        required
      />
    </div>
  );
}
