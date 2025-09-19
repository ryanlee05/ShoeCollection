import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import LV from './images/louisvuitton.jpg'
import Blazer from './images/blazers.jpg'
import Crocs from './images/crocs.jpg'
import Syracuse from './images/syracuse.jpg'
import UNC from './images/UNC.jpg'
import Adidas from './images/Adidas.jpg'
import NewBalance from './images/newbalance.jpg'
import Kyrie from './images/kyrie.jpg'
import Ugg from './images/loafer.jpg'
import HeyDudes from './images/sandal.jpg'

function App() {

  return (
    <>
      <div className = "title">
        <h1 id = 'shoe'>Ryan's Shoe Collection</h1>
      </div> 

      <div className = 'shoe-collection'>
        <Card source = {LV} url = 'https://us.louisvuitton.com/eng-us/products/lv-classic-sneaker-nvprod6150001v/1AHSSZ' title = 'Louis Vuitton Sneakers' price = '1,180'/>
        <Card source = {Syracuse} url = 'https://stockx.com/nike-dunk-low-sp-syracuse' title = 'Syracuse Dunks' price = '115'/>
        <Card source = {UNC} url  = 'https://stockx.com/nike-dunk-low-unc-2021?country=US&currencyCode=USD&size=8.5&size-conversion=us+m&g_acctid=709-098-4271&g_adgroupid=184357887499&g_adid=770378268631&g_adtype=pla&g_campaign=OD+-+Sneakers+-+Mid+CM+-+%28US%29+New+Customer&g_campaignid=21802225654&g_ifcreative=&g_ifproduct=product&g_keyword=&g_keywordid=pla-2403889122944&g_merchantid=111829866&g_network=g&g_partition=2403889122944&g_productchannel=online&g_productid=aaa15c0b-739e-4aea-9b68-ae28a8f0904f&gclsrc=aw.ds&utm_source=google&utm_medium=cpc&utm_campaign=od_sneakers_midcm_%28us%29newcustomer&utm_campaignid=21802225654&content=770378268631&keyword=&gad_source=1&gad_campaignid=21802225654&gbraid=0AAAAADePu3D4Y9fhhBmukpGHSZMKq6luV&gclid=Cj0KCQjw267GBhCSARIsAOjVJ4HQ37kUwsTxrXjgzrNjIMXuBy0n_tWZ0VInWQpKtLQfLSVifbaO2bkaApyREALw_wcB' title = 'UNC Dunks' price = '200'/>
        <Card source = {Adidas} url = 'https://www.adidas.com/us/samba-xlg-shoes/JS3828.html' title = 'Adidas Samba XLG' price = '90'/>
        <Card source = {NewBalance} url = 'https://www.newbalance.com/pd/574-core/ML574V3-40377.html' title = 'New Balance 570s' price = '120'/>
        <Card source = {Kyrie} url = 'https://stockx.com/nike-kyrie-8-infinity-smoke-and-mirrors' title = 'Kyrie Infinity' price = '115'/>
        <Card source = {Blazer} url = 'https://www.dickssportinggoods.com/p/nike-mens-blazer-mid-77-vintage-shoes-20nikmblzrmd77vntmns/20nikmblzrmd77vntmns?sku=20691380&camp=CSE:DSG_2300468638771_pla_pla-2300468638771_167471152768_21254808139&segment=&gclsrc=aw.ds&gad_source=1&gad_campaignid=21254808139&gbraid=0AAAAADv4bTbkoen23qkEKMVj1nZXKm9jN&gclid=Cj0KCQjw267GBhCSARIsAOjVJ4GK3KA9_sEkbTwEgaT_K__u25673IlYLhL8tVX4TaufOo_V3nOn4ZkaAt_gEALw_wcB' title = 'Nike Blazers' price = '105'/>
        <Card source = {Crocs} url = 'https://www.zappos.com/p/unisex-crocs-classic-clog-army-green/product/7153812/color/3005?utm_source=google&utm_medium=pla_x&utm_campaign=22083548820&utm_term=_o_45755103&utm_content=_g__w__l_Cj0KCQjw267GBhCSARIsAOjVJ4HYzaNzRJumsoNjf1Eye-vQ4qM-Xuufqv81GsW07qUEXBuLzjv-bFoaAmmREALw_wcB&gbraid=0AAAAADnIwa_UWSGRE9Dmbp0hRdNyFoH2k&gclid=Cj0KCQjw267GBhCSARIsAOjVJ4HYzaNzRJumsoNjf1Eye-vQ4qM-Xuufqv81GsW07qUEXBuLzjv-bFoaAmmREALw_wcB' title = 'Green Crocs' price = '50'/>
        <Card source = {Ugg} url = 'https://www.nordstromrack.com/s/ugg-olsen-slipper-men/3732795?origin=keywordsearch-personalizedsort&breadcrumb=Home%2FAll%20Results&color=219' title = 'Ugg Loafers' price = '110'/>
        <Card source = {HeyDudes} url = 'https://www.heydude.com/products/myers-flip-classic-brown-brown' title = 'Hey Dudes Sandals' price = '45'/>
      </div>

      <div className = "title">
        <h2>Disclaimer: some shoes are dirty!!!</h2>
      </div>
    </>

  )
}

export default App
