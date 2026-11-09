var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SegmentasiPotensiTanamanPanganKabupatenTuban_1 = new ol.format.GeoJSON();
var features_SegmentasiPotensiTanamanPanganKabupatenTuban_1 = format_SegmentasiPotensiTanamanPanganKabupatenTuban_1.readFeatures(json_SegmentasiPotensiTanamanPanganKabupatenTuban_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SegmentasiPotensiTanamanPanganKabupatenTuban_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SegmentasiPotensiTanamanPanganKabupatenTuban_1.addFeatures(features_SegmentasiPotensiTanamanPanganKabupatenTuban_1);
var lyr_SegmentasiPotensiTanamanPanganKabupatenTuban_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SegmentasiPotensiTanamanPanganKabupatenTuban_1, 
                style: style_SegmentasiPotensiTanamanPanganKabupatenTuban_1,
                popuplayertitle: 'Segmentasi Potensi Tanaman Pangan Kabupaten Tuban',
                interactive: true,
    title: 'Segmentasi Potensi Tanaman Pangan Kabupaten Tuban<br />\
    <img src="styles/legend/SegmentasiPotensiTanamanPanganKabupatenTuban_1_0.png" /> Campuran Padi–Jagung<br />\
    <img src="styles/legend/SegmentasiPotensiTanamanPanganKabupatenTuban_1_1.png" /> Lumbung Padi<br />\
    <img src="styles/legend/SegmentasiPotensiTanamanPanganKabupatenTuban_1_2.png" /> Sentra Jagung & Palawija Lahan Kering<br />\
    <img src="styles/legend/SegmentasiPotensiTanamanPanganKabupatenTuban_1_3.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_SegmentasiPotensiTanamanPanganKabupatenTuban_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SegmentasiPotensiTanamanPanganKabupatenTuban_1];
lyr_SegmentasiPotensiTanamanPanganKabupatenTuban_1.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Kecamatan', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'X': 'X', 'Y': 'Y', 'Data Projek 2 Peta Kode_Segmen': 'Kode Segmen', 'Data Projek 2 Peta Segmen': 'Segmen', 'Data Projek 2 Peta Segmen_Rinci': 'Segmen Rinci', 'Data Projek 2 Peta Silhouette': 'Silhoutte', 'Data Projek 2 Peta Luas_Padi_ha': 'Luas Padi ha', 'Data Projek 2 Peta Produksi_Padi_ton': 'Produksi Padi', 'Data Projek 2 Peta Produktivitas_Padi': 'Produktivitas Padi', 'Data Projek 2 Peta Luas_Jagung_ha': 'Luas Jagung ha', 'Data Projek 2 Peta Produksi_Jagung_ton': 'Produksi Jagung', 'Data Projek 2 Peta Produktivitas_Jagung': 'Produktivitas Jagung', 'Data Projek 2 Peta Luas_Palawija_Lain_ha': 'Luas Palawija Lain ha', 'Data Projek 2 Peta Pangsa_Jagung_persen': 'Persentase Pangsa Jagung', 'Data Projek 2 Peta Pertumbuhan_persen': 'Persentase Pertumbuhan', 'Data Projek 2 Peta Kontribusi_Padi_persen': 'Persentase Kontribusi Padi', 'Data Projek 2 Peta Kontribusi_Jagung_persen': 'Persentase Kontribusi Jagung', });
lyr_SegmentasiPotensiTanamanPanganKabupatenTuban_1.set('fieldImages', {'fid': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Data Projek 2 Peta Kode_Segmen': 'Range', 'Data Projek 2 Peta Segmen': 'TextEdit', 'Data Projek 2 Peta Segmen_Rinci': 'TextEdit', 'Data Projek 2 Peta Silhouette': 'TextEdit', 'Data Projek 2 Peta Luas_Padi_ha': 'TextEdit', 'Data Projek 2 Peta Produksi_Padi_ton': 'TextEdit', 'Data Projek 2 Peta Produktivitas_Padi': 'TextEdit', 'Data Projek 2 Peta Luas_Jagung_ha': 'TextEdit', 'Data Projek 2 Peta Produksi_Jagung_ton': 'TextEdit', 'Data Projek 2 Peta Produktivitas_Jagung': 'TextEdit', 'Data Projek 2 Peta Luas_Palawija_Lain_ha': 'TextEdit', 'Data Projek 2 Peta Pangsa_Jagung_persen': 'TextEdit', 'Data Projek 2 Peta Pertumbuhan_persen': 'TextEdit', 'Data Projek 2 Peta Kontribusi_Padi_persen': 'TextEdit', 'Data Projek 2 Peta Kontribusi_Jagung_persen': 'TextEdit', });
lyr_SegmentasiPotensiTanamanPanganKabupatenTuban_1.set('fieldLabels', {'WADMKC': 'no label', 'Data Projek 2 Peta Kode_Segmen': 'inline label - always visible', 'Data Projek 2 Peta Segmen': 'inline label - always visible', 'Data Projek 2 Peta Segmen_Rinci': 'inline label - always visible', 'Data Projek 2 Peta Silhouette': 'inline label - always visible', 'Data Projek 2 Peta Luas_Padi_ha': 'inline label - always visible', 'Data Projek 2 Peta Produksi_Padi_ton': 'inline label - always visible', 'Data Projek 2 Peta Produktivitas_Padi': 'inline label - always visible', 'Data Projek 2 Peta Luas_Jagung_ha': 'inline label - always visible', 'Data Projek 2 Peta Produksi_Jagung_ton': 'inline label - always visible', 'Data Projek 2 Peta Produktivitas_Jagung': 'inline label - always visible', 'Data Projek 2 Peta Luas_Palawija_Lain_ha': 'inline label - always visible', 'Data Projek 2 Peta Pangsa_Jagung_persen': 'inline label - always visible', 'Data Projek 2 Peta Pertumbuhan_persen': 'inline label - always visible', 'Data Projek 2 Peta Kontribusi_Padi_persen': 'inline label - always visible', 'Data Projek 2 Peta Kontribusi_Jagung_persen': 'inline label - always visible', });
lyr_SegmentasiPotensiTanamanPanganKabupatenTuban_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});