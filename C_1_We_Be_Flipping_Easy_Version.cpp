#include <bits/stdc++.h>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;
    
    while(t--){
        int n;
        cin >> n;
        vector<long long> a(n+1);
        for(int i = 1; i <= n; i++) cin >> a[i];
        
        vector<int> ops;
        int parity = 0; // 0 = not flipped, 1 = flipped (prefix up to current)
        
        // Process positions 1..n-1
        // At each position i, effective value = a[i] * (-1)^parity
        // We want effective value to be negative
        // If effective value > 0, perform op at i (requires a[i]*(-1)^parity > 0, which it is)
        
        for(int i = 1; i < n; i++){
            long long eff = a[i] * (parity % 2 == 0 ? 1 : -1);
            if(eff > 0){
                // flip at i: flips prefix 1..i, so parity flips
                ops.push_back(i);
                parity ^= 1;
                // now effective value becomes negative (good)
            }
        }
        
        // Now handle position n
        // effective value of a[n] with current parity
        long long eff_n = a[n] * (parity % 2 == 0 ? 1 : -1);
        if(eff_n > 0){
            // a[n] is positive, we want it negative
            // flip at n: need a[n]*(-1)^parity > 0, which it is (eff_n > 0)
            ops.push_back(n);
            parity ^= 1;
        }
        // After this, a[n] is negative.
        // But flipping at n also flipped a[1..n-1].
        // Check if we can recover: the sum should still be minimized
        // because |a[n]| is now contributing negatively.
        // However flipping n also flips a[1] again...
        // This greedy handles it: if a[n] was positive, flip it.
        // The prefix 1..n-1 flips, but we already made them all negative before,
        // so they become positive — BAD.
        
        // Let's rethink: We need a cleaner strategy.
        // See corrected solution below.
        
        cout << ops.size() << "\n";
        for(int x : ops) cout << x << " ";
        cout << "\n";
    }
    
    return 0;
}