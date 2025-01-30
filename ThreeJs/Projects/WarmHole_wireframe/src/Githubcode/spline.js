
import * as THREE from 'three';
const curvePath = [
	10.136184463414924, -1.374508746897471, 10.384881573913269,
	9.1152593889854714, -1.374508746897471, 8.5846792797570011,
	9.0669355709754882, -1.0665123466336568, 5.8937771631608156,
	10.151040177840205, -0.65913653144937956, 3.4340491740541346,
	10.806779203170416, 1.8859391007298545, 0.46855774212986023,
	10.761433540147586, 2.8724172201359197, -1.2811838605587311,
	9.6195923104445065, 2.8724172201359197, -3.2833099941904766,
	6.9763020889151646, 2.7659257976905427, -4.7591958908830172,
	6.0461277891353697, 1.0727045302089879, -6.6638740164090482,
	7.3472235778544794, -1.8228856326635698, -9.0685043046185623,
	7.226367212900791, -1.8228856326635698, -10.499536640855691,
	5.8354566696263914, -1.8228856326635698, -12.039219379199908,
	3.6532357452141353, -0.20463983570573391, -13.87695442281038,
	-0.30169589630131455, 1.5965000671484342, -14.879986418947327,
	-2.8925694230502157, 2.2971364614427481, -13.892095587598131,
	-4.537672295357936, 4.5863515759659208, -12.140831652074551,
	-6.1287913464117594, 5.9653814634119815, -8.9776527318875896,
	-6.0120301606452813, 4.4081161943855998, -6.712084358394045,
	-5.2138252159038974, 2.820894808418279, -4.4532820412085607,
	-2.3424712835109611, 2.2032065005086259, -3.0788773693500198,
	-0.0076956453915433265, 1.8931797788880202, -1.6577070662471063,
	-0.24767503988481437, 2.8845808465856684, 0.073915859214221724,
	-2.2174044353598896, 4.2415524507318576, 2.215992718290742,
	-3.4526531678364756, 3.0615192023340851, 4.7922404932096558,
	-3.7356278971556445, 1.4054080369354316, 7.8432021841434629,
	-3.4003734463804118, 1.1924069108769393, 9.2464090886227073,
	-1.8851803760476225, 1.5269331003449989, 10.306083896408374,
	0.01071077144031829, 2.1101821577522295, 10.490880699847727,
	0.42562058195647001, 2.2759939598834387, 11.613129436580291,
	0.096405262182225115, 0.032317784084054391, 16.223455375061565,
	2.3458797884520433, 0.38907275257695584, 19.91188266079584,
	5.7018400098488771, 1.73337964747396, 20.615481586999959,
	7.9720939736751824, 1.73337964747396, 19.303399329816457,
	9.8672362721095652, 0.090083018057025177, 16.893338541618121,
	11.225959519544134, -1.374508746897471, 14.279002555560753,
	11.288646925965876, -1.374508746897471, 11.926359497447137,
	10.136184463414924, -1.374508746897471, 10.384881573913269
];

// construct tunnel track
const points = [];
const len = curvePath.length;
for (let p = 0; p < len; p += 3) {
  points.push(new THREE.Vector3(
    curvePath[p], 
    curvePath[p + 1], 
    curvePath[p + 2]
));
}

const spline = new THREE.CatmullRomCurve3(points);

export default spline;

