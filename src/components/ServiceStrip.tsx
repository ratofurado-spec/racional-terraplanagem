const items = ['Terraplanagem', 'Movimentação de terra', 'Locação de máquinas', 'Preparação de terrenos']

export function ServiceStrip() {
  return (
    <section className="strip" aria-label="Principais serviços">
      <ul className="container strip__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
