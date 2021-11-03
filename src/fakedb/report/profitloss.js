const data = {
    data: [
        {
            name: 'pendapatan',
            label: 'Pendapatan',
            sub: [
                {
                    kode: '40001',
                    label: 'Penjualan Barang',
                },
                {
                    kode: '40002',
                    label: 'DP Jasa',
                },
                {
                    kode: '80001',
                    label: 'Penjualan Lain - Lain',
                }
            ]
        },
        {
            name: 'pembelian',
            label: 'Pembelian',
            sub: [
                {
                    kode: '50001',
                    label: 'Beban Akomodasi',
                },
                {
                    kode: '50002',
                    label: 'Beban Sewa',
                },
                {
                    kode: '90001',
                    label: 'Beban Lain - Lain',
                }
            ]
        },
        {
            name: 'beban',
            label: 'Beban',
            sub: [
                {
                    kode: '70001',
                    label: 'Beban Akomodasi',
                },
                {
                    kode: '70002',
                    label: 'Beban Sewa',
                },
                {
                    kode: '70003',
                    label: 'Beban Lain - Lain',
                }
            ]
        }
    ]
}
module.exports = data