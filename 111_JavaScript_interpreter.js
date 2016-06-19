//111 interpreter in JavaScript by Lexici Scriptor
//111 by Ehird @ Esolang

//Actually, this is not an 111 interpreter: the substitution doesn't repeat; it will _continue_!
//Just comment the second line of the rep function and decomment the third to have a proper 111 interpreter.

var s = ""; //insert here the 111 code; fuck no standard input
var l = 0, e = 0; //ones, exit
var p, r; //pattern, replacement

function red(i){ //counts and removes initial 'i's
    if ((s.length === 0)||(s[0] != i)) return 0;
    s = s.slice(1);
    return 1 + red(i);
}

function rep(s,p,r){ //replaces p with r in s
    if ((s.length < p.length)) return s;
    if (s.slice(0,p.length) == p) return r + rep(s.slice(p.length),p,r);
    //if (s.slice(0,p.length) == p) return r + s.slice(p.length);
    return s[0] + rep(s.slice(1),p,r);
}

do {
    console.log(s);
    l = red(1);
    if (l === 0) e = -1;
    else if (s.length < l + 1) e = 1;
        else {
            p = s.slice(1,l+1);
            s = s.slice(l+1);
            l = red(1);
            if (s.length < l + 1) e = 1;
            else {
                r = s.slice(1,l+1);
                s = s.slice(l+1);
                s = rep(s,p,r);
            }
        }
} while (e === 0);

if (e === -1) console.log("Infinite loop: initial zero.");
if (e === 1) console.log("End.");
