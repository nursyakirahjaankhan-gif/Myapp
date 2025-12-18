import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const sampleProducts = [
  { id: 1, name: 'AMOCS', description: 'Combat Management System' },
  { id: 2, name: 'MyKar', description: 'SCS Electric Vehicle' },
  { id: 3, name: 'SCS-SM', description: 'Secure Messaging' },
  { id: 4, name: 'IOCC', description: 'Integrated Operations Command Centre' },
  { id: 5, name: 'DK Marine', description: 'Marine' },
  { id: 6, name: 'DK Architecture', description: 'Architecture' },
  { id: 7, name: 'IDMS', description: 'SCS Integrated Disaster Management System' },
  { id: 8, name: 'Command & Control', description: 'SCS Tactical Command & Control SystemR' },
  { id: 9, name: 'DK Transport', description: 'Transportation' },
  { id: 10, name: 'ITMS', description: 'SCS Intelligent Trafic Management System' },
  { id: 11, name: 'DK Modular Homes', description: 'Modular House' }
]

export default function Products() {
  return (
    <section className="page products">
      <h1>Products</h1>
      <ul className="product-list">
        {sampleProducts.map(p => (
          <li key={p.id} className="product">
            <div className="product-name"><b>{p.name}</b></div>
            <div className="product-description">{p.description}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
