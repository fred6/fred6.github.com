Raphael.fn.vertex = function(x, y, color) {
    color = color || "#000000";
    this.circle(x, y, 3).attr("fill", color,"stroke", color);
};

Raphael.fn.polygon = function(n, x, y, s) {
    var ang = 2 * Math.PI / n,
        theta = (Math.PI - ang) / 2;
    r = s * Math.sin(theta) / Math.sin(ang);
    var vec_ang = theta;
    var verts = [[x + r*Math.cos(vec_ang)], [y + r*Math.sin(vec_ang)]];
    var i, path1 = "M"+verts[0][0]+","+verts[1][0];
    this.vertex(verts[0][0], verts[1][0]);
    var path2 = path1;

    for(i = 1; i < n; i++) {
        vec_ang = vec_ang - ang;
        verts[0][i] = x + r*Math.cos(vec_ang);
        verts[1][i] = y + r*Math.sin(vec_ang);
        path1 += "L"+verts[0][i]+","+verts[1][i];
        this.vertex(verts[0][i], verts[1][i]);
    }

    for(i = n-1; i > 0; i--) {
        path2 += "L"+verts[0][i]+","+verts[1][i];
    }

    path1 += "L"+verts[0][0]+","+verts[1][0];
    path2 += "L"+verts[0][0]+","+verts[1][0];
    return [path1, path2];
};

Raphael.fn.ngon_symm = function(n, cx, cy, s) {
    var paths = this.polygon(n, cx, cy, s),
        ang = 2 * Math.PI / n,
        ngon = this.path(paths[0]).attr("stroke-width", 2);

    var rotbutt = this.path("M10,10L30, 10,L30,30L10,30L10,10").attr("fill", "#0022d9");
    var rot = 0;
    rotbutt.node.onclick = function() {
        rot += Math.round((180/Math.PI)*ang);
        ngon.stop().animate({transform: "r"+rot+","+cx+","+cy}, 1000);
    };

    var refbutt = this.path("M50,10L70, 10,L70,30L50,30L50,10").attr("fill", "#d92200");
    var ref = 0;
    refbutt.node.onclick = function() {
        ref = (ref == 0) ? 1 : 0;
        ngon.stop().animate({path: paths[ref]}, 1000);
    };

    return ngon;

}
