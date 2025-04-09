const speakers = [
    ["Jiahua Chen","University of British Columbia","Canada"],
    ["Marissa Reitsma","Stanford University","United States"],
    ["Ying Yuan","MD Anderson Cancer Center","United States"],
    ["Grace Yi","University of Western Ontario","Canada"],
    ["Margaret S Stedman","University of Stanford","United States"],
    ["Nazrul Islam","University of Southampton","United Kingdom"],
    ["Tim Swartz","Simon Fraser University","Canada"],
    ["Mohsen Sadatsafavi","University of British Columbia","Canada"],
    ["Kevin He","University of Michigan","United States"],
    ["Alexandre Bouchard-Côté","University of British Columbia","Canada"],
    ["Lei Liu","Washington University in St. Louis","United States"],
    ["Zhenhua Lin","National University of Singapore","Singapore"],
    ["Liqun Wang","University of Manitoba","Canada"],
    ["Owen Ward","Simon Fraser University","Canada"],
    ["Hongbin Zhang","University of Kentucky","United States"],
    ["Julie Zhou","University of Victoria","Canada"],
    ["Longhai Li","University of Saskatchewan","Canada"],
    ["Xuewen Lu","University of Calgary","Canada"],
    ["Andrew McCormack","University of Alberta","Canada"],
    ["Shouxia Wang","Shanghai University of Finance and Economics","China"],
    ["Wenqing He","University of Western Ontario","Canada"],
    ["Marissa Reitsma","Stanford University","United States"],
    ["John Braun","University of British Columbia, Okanagan","Canada"],
    ["Joan Hu","Simon Fraser University","Canada"],
    ["Rhonda Rosychuk","University of Alberta","Canada"],
    ["Boyi Hu","Columbia University","United States"],
    ["Lang Wu","University of British Columbia","Canada"],
    ["Hua Liu","Xi'an Jiaotong University","China"],
    ["Lloyd T. Elliott","Simon Fraser University","Canada"],
    ["Trevor Campbell","University of British Columbia","Canada"],
    ["Jianghu Dong","University of Nebraska Medical Center","United States"],
    ["Tianyu Guan","York University","Canada"],
    ["Lin Zhang","Simon Fraser University","Canada"],
    ["Michelle Miranda","University of Victoria","Canada"],
    ["Li Xing","University of Saskatchewan","Canada"],
    ["Benjamin Bloem-Reddy","University of British Columbia","Canada"],
    ["Jabed H. Tomal","Thompson Rivers University","Canada"],
    ["Cédric Beaulac","Université du Québec à Montréal","Canada"],
    ["Sidi Wu","Fuzhou University","China"],
    ["Xiaoping Shi","University of British Columbia, Okanagan","Canada"],
    ["Himchan Jeong","Simon Fraser University","Canada"],
    ["Irene Vrbik","University of British Columbia, Okanagan","Canada"],
    ["John Thompson","University of British Columbia, Okanagan","Canada"],
    ["Jie Jian","University of Chicago","United States"],
    ["Ke Li","Simon Fraser University","Canada"],
    ["Jiaqi Men","Shanghai University of Finance and Economics","China"],
    ["Vinky Wang","University of British Columbia","Canada"],
    ["Yidong Zhou","UC Davis","United States"],
    ["Bahadır YÜZBAŞI","Inonu University","Turkey"],
    ["Bingfan Liu","Simon Fraser University","Canada"],
    ["Jean-François Bégin","Simon Fraser University","Canada"],
    ["Adam Kashlak","University of Alberta","Canada"],
    ["Andrews, Jeffrey","University of British Columbia, Okanagan","Canada"],
    ["David Stenning","Simon Fraser University","Canada"],
    ["Archer Yi Yang","McGill University","Canada"],
    ["Jiarui Zhang","Simon Fraser University","Canada"],
    ["Siying Ma","Simon Fraser University","Canada"],
    ["Henan Xu","University of Waterloo","Canada"],
    ["Muye Nanshan","Simon Fraser University","Canada"],
    ["Vinky Wang","University of British Columbia","Canada"],
    ["Matthew Parker","Simon Fraser University","Canada"],
    ["Mathias Lécuyer","University of British Columbia","Canada"],
    ["Jiatao Zhong","University of British Columbia, Okanagan","Canada"],
    ["Longlong Huang","University of the Fraser Valley","Canada"],
    ["Deniz Sezer","University of Calgary","Canada"],
    ["Scott Powers","Rice University","United States"],
    ["Hanna Frank","University of British Columbia","Canada"],
    ["Paul N. Zivich","University of North Carolina at Chapel Hill","United States"],
    ["Alyssa Bilinski","Brown University","United States"],
    ["Ruitao Lin","MD Anderson Cancer Center","United States"],
    ["Tao Wang","University of Victoria","Canada"],
    ["Xiaotian Dai","Illinois State University","United States"],
    ["Fatemeh Mahmoudi","Mount Royal University","Canada"],
    ["Ladan Tazik","University of British Columbia, Okanagan","Canada"],
    ["Nathan Sandholtz","Brigham Young University","United States"],
    ["Belal Hossain","University of British Columbia","Canada"],
    ["Lawrence McCandless","Simon Fraser University","Canada"],
    ["Yuchen Hu","Stanford University","United States"],
    ["Yueyang Han","Simon Fraser University","Canada"],
    ["Dengdeng Yu","University of Texas at San Antonio","United States"],
    ["Thierry Chekouo Tekougang","University of Minnesota","United States"],
    ["Ken Peng","Simon Fraser University","Canada"],
    ["Shifan Jia","Simon Fraser University","Canada"],
    ["Aline Talhouk","University of British Columbia","Canada"],
    ["Ehsan Karim","University of British Columbia","Canada"],
    ["Divya Shanmugam","Cornell Tech","United States"],
    ["Quang Vuong","Core Clinical Sciences","Canada"],
    ["Ruchi Singh Parihar","Christ University","India"],
    ["Saadia Masood","PMAS-Arid Agriculture University Rawalpindi","Pakistan"],
    ["Roshni Sahoo","Stanford University","United States"],
    ["Edward Yalley","Louisiana State University","United States"],
    ["Maurice O'Connell","University of Manchester","United Kingdom"],
    ["Kunj Guglani","Australian National University","Australia"],
    ["Guilherme Lopes de Oliveira","McGill University","Canada"],
    ["Alex Stringer","University of Waterloo","Canada"],
    ["Guilherme Augusto Veloso","Fluminense Federal University","Brazil"],
    ["Thomas Farrar","Cape Peninsula University of Technology","South Africa"],
    ["Nkechi Grace Okoacha","Pan-Atlantic University","Nigeria"],
    ["Tanya Kovalova","McMaster University","Canada"],
    ["Rajitha Senanayake","McMaster University","Canada"],
    ["Louis Arsenault-Mahjoubi","Simon Fraser University","Canada"],
    ["Nahid Sadr","Université de Sherbrooke","Canada"],
    ["Jesse Ghashti","University of British Columbia, Okanagan","Canada"],
    ["Richard Yan","Simon Fraser University","Canada"],
    ["Nathan Phelps","University of Western Ontario","Canada"],
    ["Elizabeth Chou","National Chengchi University","Taiwan"],
    ["Giseon Heo","University of Alberta","Canada"],
    ["Jiatao Zhong","University of British Columbia, Okanagan","Canada"],
    ["Haiyi Shi","Simon Fraser University","Canada"],
    ["Ann Smith","University of Huddersfield","United Kingdom"]
],
    element = document.getElementById("confirmed-speakers")


let html = "<ul class=\"bulleted speakers\">"
for (const [name,  university, country] of speakers) {
    html += `<li><span style="font-weight: bold;">${name}</span>. ${university}, ${country}</li>\n`
}
html += "</ul>"

element.innerHTML = html
