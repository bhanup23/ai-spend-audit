#include<bits/stdc++.h>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;
    
    while(t--) {
        int n;
        cin >> n;
        vector<long long> a(n);
        
        for(int i = 0; i < n; i++) {
            cin >> a[i];
        }
        
        vector<int> ops;
        
        // Keep flipping at rightmost positive until all negative
        for(int iter = 0; iter < n; iter++) {
            // Find rightmost positive element
            int pos = -1;
            for(int i = n-1; i >= 0; i--) {
                if(a[i] > 0) {
                    pos = i;
                    break;
                }
            }
            
            // If no positive found, we're done
            if(pos == -1) break;
            
            // Flip all elements from 0 to pos
            for(int i = 0; i <= pos; i++) {
                a[i] = -a[i];
            }
            
            // Record operation (1-indexed)
            ops.push_back(pos + 1);
        }
        
        // Output
        cout << ops.size() << "\n";
        for(int x : ops) {
            cout << x << " ";
        }
        if(ops.size() > 0) cout << "\n";
    }
    
    return 0;
}
