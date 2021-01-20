export function renderText(g, text, x, y, opt) {
    g.save();
    g.translate(x, y);

    if (opt) {
        g.textAlign = opt.centered ? "center" : g.textAlign;
        g.textBaseline = opt.middle ? "middle" : g.textBaseline;

        if (opt.edged) {
            g.strokeText(text, 0, 0);
        }
    }

    g.fillText(text, 0, 0);

    g.restore();
}